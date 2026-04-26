"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/api/requests")
      .then(res => res.json())
      .then(setRequests);
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Admin Panel Reale</h1>

      <div className="mt-6 space-y-3">

        {requests.map(r => (
          <div key={r.id} className="bg-white/5 p-4 rounded-xl">
            {r.type} - {r.status}
          </div>
        ))}

      </div>
    </div>
  );
}