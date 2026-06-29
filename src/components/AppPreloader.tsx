import { useCallback, useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import type { DotLottie } from '@lottiefiles/dotlottie-react'

const PRELOADER_ANIMATION_SRC = '/lottie/fly.lottie'

type AppPreloaderProps = {
  onReady?: () => void
}

export default function AppPreloader({ onReady }: AppPreloaderProps) {
  const hasReportedReadyRef = useRef(false)
  const removeLottieListenersRef = useRef<() => void>(() => {})

  const reportReady = useCallback(() => {
    if (hasReportedReadyRef.current) return

    hasReportedReadyRef.current = true
    onReady?.()
  }, [onReady])

  const handleDotLottieRef = useCallback(
    (dotLottie: DotLottie | null) => {
      removeLottieListenersRef.current()
      removeLottieListenersRef.current = () => {}

      if (!dotLottie) return

      if (dotLottie.isLoaded || dotLottie.isReady) {
        window.requestAnimationFrame(reportReady)
        return
      }

      dotLottie.addEventListener('ready', reportReady)
      dotLottie.addEventListener('load', reportReady)
      dotLottie.addEventListener('render', reportReady)

      removeLottieListenersRef.current = () => {
        dotLottie.removeEventListener('ready', reportReady)
        dotLottie.removeEventListener('load', reportReady)
        dotLottie.removeEventListener('render', reportReady)
      }
    },
    [reportReady],
  )

  useEffect(() => {
    const fallbackTimerId = window.setTimeout(reportReady, 1500)

    return () => {
      window.clearTimeout(fallbackTimerId)
      removeLottieListenersRef.current()
    }
  }, [reportReady])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061a22]"
      role="status"
      aria-label="Loading Indikosh"
    >
      <DotLottieReact
        src={PRELOADER_ANIMATION_SRC}
        loop
        autoplay
        dotLottieRefCallback={handleDotLottieRef}
        className="h-80 w-80 md:h-[22rem] md:w-[22rem]"
        aria-hidden="true"
      />
      <span className="sr-only">Loading Indikosh</span>
    </div>
  )
}
