import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {scroller} from "react-scroll";

export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}

export interface StaggeredMenuProps {
    position?: "left" | "right";
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    isFixed: boolean;
    changeMenuColorOnOpen?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
                                                                position = "right",
                                                                colors = ["var(--muted-foreground)", "var(--accent-foreground)"],
                                                                items = [],
                                                                socialItems = [],
                                                                displaySocials = true,
                                                                displayItemNumbering = true,
                                                                className,
                                                                logoUrl = "",
                                                                menuButtonColor = "var(--foreground)",
                                                                openMenuButtonColor = "var(--background)",
                                                                changeMenuColorOnOpen = true,
                                                                accentColor = "var(--accent)",
                                                                isFixed = false,
                                                                closeOnClickAway = true,
                                                                onMenuOpen,
                                                                onMenuClose,
                                                            }) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);

    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const textWrapRef = useRef<HTMLSpanElement | null>(null);
    const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
    const colorTweenRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    const sidePanelPos =
        position === "left" ? "left-0 right-auto" : "right-0 left-auto";

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;

            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers: HTMLElement[] = [];
            if (preContainer) {
                preLayers = Array.from(
                    preContainer.querySelectorAll(".sm-prelayer")
                ) as HTMLElement[];
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === "left" ? -100 : 100;
            gsap.set([panel, ...preLayers], {xPercent: offscreen});

            gsap.set(plusH, {transformOrigin: "50% 50%", rotate: 0});
            gsap.set(plusV, {transformOrigin: "50% 50%", rotate: 90});
            gsap.set(icon, {rotate: 0, transformOrigin: "50% 50%"});

            gsap.set(textInner, {yPercent: 0});

            if (toggleBtnRef.current)
                gsap.set(toggleBtnRef.current, {color: menuButtonColor});
        });
        return () => ctx.revert();
    }, [menuButtonColor, position]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(
            panel.querySelectorAll(".sm-panel-itemLabel")
        ) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
        ) as HTMLElement[];
        const socialTitle = panel.querySelector(
            ".sm-socials-title"
        ) as HTMLElement | null;
        const socialLinks = Array.from(
            panel.querySelectorAll(".sm-socials-link")
        ) as HTMLElement[];

        const layerStates = layers.map((el) => ({
            el,
            start: Number(gsap.getProperty(el, "xPercent")),
        }));
        const panelStart = Number(gsap.getProperty(panel, "xPercent"));

        if (itemEls.length) gsap.set(itemEls, {yPercent: 140, rotate: 10});
        if (numberEls.length) gsap.set(numberEls, {["--sm-num-opacity" as never]: 0});
        if (socialTitle) gsap.set(socialTitle, {opacity: 0});
        if (socialLinks.length) gsap.set(socialLinks, {y: 25, opacity: 0});

        const tl = gsap.timeline({paused: true});

        layerStates.forEach((ls, i) => {
            tl.fromTo(
                ls.el,
                {xPercent: ls.start},
                {xPercent: 0, duration: 0.5, ease: "power4.out"},
                i * 0.07
            );
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            {xPercent: panelStart},
            {xPercent: 0, duration: panelDuration, ease: "power4.out"},
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

            tl.to(
                itemEls,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: {each: 0.1, from: "start"},
                },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    {
                        duration: 0.6,
                        ease: "power2.out",
                        ["--sm-num-opacity" as never]: 1,
                        stagger: {each: 0.08, from: "start"},
                    },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;

            if (socialTitle)
                tl.to(
                    socialTitle,
                    {opacity: 1, duration: 0.5, ease: "power2.out"},
                    socialsStart
                );

            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: {each: 0.08, from: "start"},
                        onComplete: () => {
                            gsap.set(socialLinks, {clearProps: "opacity"});
                        },
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, []);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;

        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback("onComplete", () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all: HTMLElement[] = [...layers, panel];
        closeTweenRef.current?.kill();

        const offscreen = position === "left" ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => {
                const itemEls = Array.from(
                    panel.querySelectorAll(".sm-panel-itemLabel")
                ) as HTMLElement[];
                if (itemEls.length) gsap.set(itemEls, {yPercent: 140, rotate: 10});

                const numberEls = Array.from(
                    panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
                ) as HTMLElement[];
                if (numberEls.length) gsap.set(numberEls, {["--sm-num-opacity" as never]: 0});

                const socialTitle = panel.querySelector(
                    ".sm-socials-title"
                ) as HTMLElement | null;
                const socialLinks = Array.from(
                    panel.querySelectorAll(".sm-socials-link")
                ) as HTMLElement[];
                if (socialTitle) gsap.set(socialTitle, {opacity: 0});
                if (socialLinks.length) gsap.set(socialLinks, {y: 25, opacity: 0});

                busyRef.current = false;
            },
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        if (!icon || !h || !v) return;

        spinTweenRef.current?.kill();

        if (opening) {
            gsap.set(icon, {rotate: 0, transformOrigin: "50% 50%"});
            spinTweenRef.current = gsap
                .timeline({defaults: {ease: "power4.out"}})
                .to(h, {rotate: 45, duration: 0.5}, 0)
                .to(v, {rotate: -45, duration: 0.5}, 0);
        } else {
            spinTweenRef.current = gsap
                .timeline({defaults: {ease: "power3.inOut"}})
                .to(h, {rotate: 0, duration: 0.35}, 0)
                .to(v, {rotate: 90, duration: 0.35}, 0)
                .to(icon, {rotate: 0, duration: 0.001}, 0);
        }
    }, []);

    const animateColor = useCallback(
        (opening: boolean) => {
            const btn = toggleBtnRef.current;
            if (!btn) return;

            colorTweenRef.current?.kill();

            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = gsap.to(btn, {
                    color: targetColor,
                    delay: 0.18,
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                gsap.set(btn, {color: menuButtonColor});
            }
        },
        [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
    );

    React.useEffect(() => {
        if (!toggleBtnRef.current) return;

        if (changeMenuColorOnOpen) {
            const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
            gsap.set(toggleBtnRef.current, {color: targetColor});
        } else {
            gsap.set(toggleBtnRef.current, {color: menuButtonColor});
        }
    }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

    const animateText = useCallback((opening: boolean) => {
        const inner = textInnerRef.current;
        if (!inner) return;

        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? "Menu" : "Close";
        const targetLabel = opening ? "Close" : "Menu";
        const cycles = 3;

        const seq: string[] = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === "Menu" ? "Close" : "Menu";
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);

        setTextLines(seq);
        gsap.set(inner, {yPercent: 0});

        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: "power4.out",
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }

        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);

            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

    React.useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeOnClickAway, open, closeMenu]);

    function scrollTo(name: string): void {
        scroller.scrollTo(name, {
            duration: 500,
            smooth: "easeInOutQuint",
        });
        closeMenu();
    }

    return (
        <div
            className={`z-40 ${isFixed ? "fixed inset-0 overflow-hidden pointer-events-none" : "h-full w-full"}`}>
            <div
                className={[
                    className ?? "",
                    "staggered-menu-wrapper pointer-events-none relative z-40 h-full w-full",
                ].join(" ")}
                style={accentColor ? ({["--sm-accent" as never]: accentColor} as React.CSSProperties) : undefined}
                data-position={position}
                data-open={open || undefined}
            >
                {/* Prelayers */}
                <div
                    ref={preLayersRef}
                    className={[
                        "sm-prelayers pointer-events-none absolute inset-y-0 z-[5] w-[clamp(260px,38vw,420px)]",
                        sidePanelPos,
                        "max-lg:left-0 max-lg:right-0 max-lg:w-full",
                    ].join(" ")}
                    aria-hidden="true"
                >
                    {(() => {
                        const raw = colors && colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"];
                        const arr = [...raw];
                        if (arr.length >= 3) {
                            const mid = Math.floor(arr.length / 2);
                            arr.splice(mid, 1);
                        }
                        return arr.map((c, i) => (
                            <div
                                key={i}
                                className={["sm-prelayer absolute inset-y-0 h-full w-full", position === "left" ? "left-0" : "right-0"].join(" ")}
                                style={{background: c}}
                            />
                        ));
                    })()}
                </div>

                {/* Header */}
                <header
                    className="staggered-menu-header pointer-events-none absolute left-0 top-0 z-20 flex w-full items-center justify-between bg-transparent p-8"
                    aria-label="Main navigation header"
                >
                    <div className="sm-logo pointer-events-auto select-none flex items-center" aria-label="Logo">
                        {logoUrl && (
                            <img
                                src={logoUrl}
                                alt="Logo"
                                className="sm-logo-img block h-8 w-auto select-none object-contain"
                                draggable={false}
                                width={110}
                                height={24}
                            />
                        )}
                    </div>

                    <button
                        ref={toggleBtnRef}
                        className={[
                            "sm-toggle pointer-events-auto relative inline-flex items-center gap-[0.3rem] overflow-visible border-0 bg-transparent font-medium leading-none",
                            "cursor-pointer focus-visible:outline focus-visible:outline-white/70 focus-visible:outline-offset-4 focus-visible:rounded",
                            open ? "text-background" : "text-foreground",
                        ].join(" ")}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="staggered-menu-panel"
                        onClick={toggleMenu}
                        type="button"
                    >
            <span
                ref={textWrapRef}
                className="sm-toggle-textWrap relative inline-block h-[1em] min-w-(--sm-toggle-width,auto) w-(--sm-toggle-width,auto) overflow-hidden whitespace-nowrap"
                aria-hidden="true"
            >
              <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                {textLines.map((l, i) => (
                    <span className="sm-toggle-line block h-[1em] leading-none" key={i}>
                    {l}
                  </span>
                ))}
              </span>
            </span>

                        <span
                            ref={iconRef}
                            className="sm-icon relative inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center will-change-transform"
                            aria-hidden="true"
                        >
              <span
                  ref={plusHRef}
                  className="sm-icon-line absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-current will-change-transform"
              />
              <span
                  ref={plusVRef}
                  className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-current will-change-transform"
              />
            </span>
                    </button>
                </header>

                {/* Panel */}
                <aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className={[
                        "staggered-menu-panel pointer-events-auto absolute top-0 z-10 flex h-full w-[clamp(260px,38vw,420px)] flex-col overflow-y-auto",
                        "bg-white p-[6em_2em_2em_2em] backdrop-blur-md",
                        sidePanelPos,
                        "max-lg:left-0 max-lg:right-0 max-lg:w-full",
                    ].join(" ")}
                    style={{WebkitBackdropFilter: "blur(12px)"}}
                    aria-hidden={!open}
                >
                    <div className="sm-panel-inner mt-6 flex flex-1 flex-col gap-5">
                        <ul
                            className="sm-panel-list m-0 flex list-none flex-col gap-y-5 p-0"
                            role="list"
                            data-numbering={displayItemNumbering || undefined}
                        >
                            {items && items.length ? (
                                items.map((it, idx) => (
                                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none"
                                        key={it.label + idx}>
                                        <button
                                            className={[
                                                "sm-panel-item inline-block cursor-pointer select-none no-underline",
                                                "text-5xl font-semibold leading-none tracking-[-2px] uppercase",
                                                "text-background transition-[color] duration-150 ease-linear hover:text-background/50",
                                            ].join(" ")}
                                            type="button"
                                            onClick={() => scrollTo(it.link)}
                                            aria-label={it.ariaLabel}
                                            data-index={idx + 1}
                                        >
                      <span className="sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform">
                        {it.label}
                      </span>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="sm-panel-itemWrap relative overflow-hidden leading-none"
                                    aria-hidden="true">
                  <span
                      className="sm-panel-item inline-block cursor-pointer pr-[1.4em] text-[4rem] font-semibold leading-none tracking-[-2px] uppercase text-black">
                    <span className="sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform">
                      No items
                    </span>
                  </span>
                                </li>
                            )}
                        </ul>

                        {displaySocials && socialItems && socialItems.length > 0 && (
                            <div className="sm-socials mt-auto flex flex-col gap-3 pt-8" aria-label="Social links">
                                <h3 className="sm-socials-title m-0 text-base font-medium text-(--sm-accent,#ff0000)">
                                    Socials
                                </h3>

                                {/* group hover dimming */}
                                <ul
                                    className="sm-socials-list group m-0 flex list-none flex-row flex-wrap items-center gap-4 p-0"
                                    role="list"
                                >
                                    {socialItems.map((s, i) => (
                                        <li key={s.label + i} className="sm-socials-item">
                                            <a
                                                href={s.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={[
                                                    "sm-socials-link relative inline-block py-0.5 text-[1.2rem] font-medium text-[#111] no-underline",
                                                    "transition-[color,opacity] duration-300 ease-linear",
                                                    "group-hover:opacity-40 hover:opacity-100 focus-visible:opacity-100",
                                                    "hover:text-(--sm-accent,#ff0000)",
                                                    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--sm-accent,#ff0000)",
                                                ].join(" ")}
                                            >
                                                {s.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default StaggeredMenu;
