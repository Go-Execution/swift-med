'use client';

import { useState } from 'react';
import { AlertOctagon, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      className="bg-red-700 text-white text-xs font-medium py-2 px-4 shadow-inner relative z-50"
      role="alert"
      aria-label="Medical emergency notice"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <AlertOctagon className="w-4 h-4 text-white flex-shrink-0 animate-pulse" />
          <span>
            <strong>Emergency Notice:</strong> For life-threatening emergencies (chest pain, severe shortness of breath, stroke symptoms, uncontrolled bleeding), call <strong>911</strong> or go to an Emergency Department.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-red-200 hover:text-white p-1 transition-colors flex-shrink-0"
          aria-label="Dismiss emergency notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
