import { Globe } from "./Globe"
import GlowWrapper from "./GlowWrapper"

export function GlobeDemo() {
  return (
    <GlowWrapper glowColor="#10b981" size="lg" className="rounded-lg">
      <div className="relative flex size-full max-w-2xl items-center justify-center overflow-visible rounded-lg border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl px-8 pb-8 pt-8 md:shadow-xl">
        <span className=" whitespace-pre-wrap bg-gradient-to-b from-emerald-400 to-cyan-300 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent tracking-wider z-10 relative" style={{ fontVariant: 'small-caps', fontSize: '1.2rem' }}>
          Dream is Destiny
        </span>
        <Globe className="top-0 scale-125" />
        <div className=" absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.05),rgba(255,255,255,0))]" />
      </div>
    </GlowWrapper>
  )
}