import React, { useEffect, useState } from "react";

export default function FooterTicker() {
  const [time, setTime] = useState(new Date());
  const [loc, setLoc] = useState("Location unknown");

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoc("Geolocation not available");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoc(Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)});
      },
      (err) => setLoc("Location denied or unavailable")
    );
  }, []);

  return (
    <div style={{position: "fixed", bottom: 0, width: "100%", background:"#f8f9fa", borderTop:"1px solid #ddd"}}>
      <div style={{whiteSpace:"nowrap", overflow:"hidden"}}>
        <div style={{display:"inline-block", padding:"8px 0", animation:"marquee 18s linear infinite"}}>
          {` ${time.toLocaleString()} — ${loc} — Belleville Dental Updates`}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}