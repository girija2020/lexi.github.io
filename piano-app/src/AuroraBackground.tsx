// src/components/AuroraBackground.tsx
import Aurora from './Aurora';

export default function AuroraBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <Aurora
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={40}
        cursorSize={50}
        isViscous={false}
        iterationsViscous={16}
        iterationsPoisson={24}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={1.0}
        autoResumeDelay={0}
        autoRampDuration={0.2}
        takeoverDuration={0.1}
      />
    </div>
  );
}