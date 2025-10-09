'use client'
import { useState, useRef, useEffect } from 'react'


export default function VideoPopup({ style, text, children }) {
    const [isOpen, setOpen] = useState(false)
    const [isExpanded, setExpanded] = useState(true)
    const videoRef = useRef(null)

    const toggleFullscreen = () => {
        const videoEl = videoRef.current
        if (!videoEl) return
        const doc = document
        const isFs = doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement
        if (!isFs) {
            const req = videoEl.requestFullscreen || videoEl.webkitRequestFullscreen || videoEl.msRequestFullscreen
            if (req) req.call(videoEl)
        } else {
            const exit = doc.exitFullscreen || doc.webkitExitFullscreen || doc.msExitFullscreen
            if (exit) exit.call(doc)
        }
    }

    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        // lock background scroll while modal is open
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [isOpen])
    return (
        <>
            {/* <a onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></a> */}
            {/* <span className="icon-19" onClick={() => setOpen(true)} /> */}
            {children ? (
                <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
                    {children}
                </span>
            ) : (
                <>
                    {!style &&
                        <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="icon-19" />
                        </a>

                    }


                    {style === 1 &&
                        <div className="video-btn">
                            <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="icon-19" /> </a>
                        </div>
                    }
                    {style === 2 &&
                        <div className="video-btn">
                            <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="icon-19" /></a><h6>{text ? text : "Latest Program Video"}</h6>
                        </div>
                    }
                    {style === 3 &&
                        <div className="video-btn">
                            <a onClick={() => setOpen(true)} className="lightbox-image">
                                <i className="customicon-play-button" />
                                <span className="border-animation border-1" />
                                <span className="border-animation border-2" />
                                <span className="border-animation border-3" />
                            </a>
                        </div>
                    }
                    {style === 4 &&
                        <div className="video-btn">
                            <a onClick={() => setOpen(true)} className="lightbox-image">
                                <img src="/assets/images-4/icons/video-btn-1.png" alt="" /></a>
                        </div>
                    }
                    {style === 5 &&
                        <a onClick={() => setOpen(true)} className="video-btn overlay-link lightbox-image video-fancybox ripple"><span className="fas fa-play" /></a>
                    }
                </>
            )}
            {isOpen && (
                <div className="video-modal-overlay" style={{ position: 'fixed', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.92), rgba(0,0,0,0.92))', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div className="video-modal-container" onClick={(e) => e.stopPropagation()} style={{ width: isExpanded ? '100%' : '90%', height: isExpanded ? '100%' : 'auto', maxWidth: isExpanded ? 'none' : 1000, aspectRatio: isExpanded ? 'auto' : '16 / 9', background: '#000', borderRadius: isExpanded ? 0 : 16, overflow: 'hidden', position: 'relative', boxShadow: isExpanded ? 'none' : '0 12px 40px rgba(0,0,0,0.55)' }}>
                        <video ref={videoRef} onDoubleClick={toggleFullscreen} src="/assets/Rooms/as2.mp4" controls autoPlay muted playsInline style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', background: '#000' }} />
                        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '10px 12px', display: 'flex', justifyContent: 'flex-end', gap: 8, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)' }}>
                            <button title={isExpanded ? 'Restore size' : 'Expand size'} aria-label={isExpanded ? 'Restore size' : 'Expand size'} onClick={() => setExpanded(!isExpanded)} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '10px 14px', cursor: 'pointer' }}>{isExpanded ? 'Restore' : 'Expand'}</button>
                            <button title="Fullscreen" aria-label="Fullscreen" onClick={toggleFullscreen} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '10px 14px', cursor: 'pointer' }}>Fullscreen</button>
                            <button title="Close" aria-label="Close" onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '10px 14px', cursor: 'pointer' }}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

