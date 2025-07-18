import { useEffect, useRef } from "react";

export default function PhotoSphereViewer({ src }) {
  const containerRef = useRef(null);
  useEffect(() => {
    let viewer;
    let PSV;
    let script;
    let css;
    async function loadViewer() {
      if (!window.PhotoSphereViewer) {
        // Dynamically load Photo Sphere Viewer script and CSS
        css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://unpkg.com/photo-sphere-viewer@4.0.7/dist/photo-sphere-viewer.min.css";
        document.head.appendChild(css);
        script = document.createElement("script");
        script.src = "https://unpkg.com/photo-sphere-viewer@4.0.7/dist/photo-sphere-viewer.min.js";
        script.async = true;
        script.onload = () => {
          PSV = window.PhotoSphereViewer;
          viewer = new PSV.Viewer({
            container: containerRef.current,
            panorama: src,
            navbar: [
              "zoom",
              "fullscreen"
            ],
            loadingImg: "https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif",
            defaultLong: Math.PI,
            mousewheel: true,
            touchmoveTwoFingers: true,
          });
        };
        document.body.appendChild(script);
      } else {
        PSV = window.PhotoSphereViewer;
        viewer = new PSV.Viewer({
          container: containerRef.current,
          panorama: src,
          navbar: [
            "zoom",
            "fullscreen"
          ],
          loadingImg: "https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif",
          defaultLong: Math.PI,
          mousewheel: true,
          touchmoveTwoFingers: true,
        });
      }
    }
    loadViewer();
    return () => {
      if (viewer) viewer.destroy();
      if (script) document.body.removeChild(script);
      if (css) document.head.removeChild(css);
    };
  }, [src]);
  return <div ref={containerRef} style={{ width: "100%", height: "100%", background: "#222", borderRadius: 12 }} />;
} 