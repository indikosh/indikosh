import { useState } from 'react'
import { FaHeart, FaInstagram, FaPlay } from 'react-icons/fa'
import { STORY_CONTENT, 
        type InstagramPost, 
        type StoryContent 
      } from '../../../data/holidayPageContent'
import type { HolidayScope } from '../../../types/holiday'

function StoryVideoCard({ post }: { post: InstagramPost }) {
  return (
    <article className="w-full text-white">
      <a
        href={post.videoUrl}
        target="_blank"
        rel="noreferrer"
        className="group block"
        aria-label={`Open Instagram video for ${post.title}`}
      >
        <div className="relative aspect-[9/14] overflow-hidden rounded-[28px] bg-surface-container sm:rounded-[38px] lg:rounded-[46px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-black/20" />
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-[#e4405f] shadow-lg">
            <FaInstagram aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#e4405f] shadow-xl transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="ml-1 text-lg" aria-hidden="true" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/78">{post.caption}</p>
            <h3 className="mt-2 text-lg font-extrabold leading-tight md:text-xl">{post.title}</h3>
            <span className="mt-3 inline-flex rounded-full bg-white/18 px-3 py-1 text-xs font-extrabold backdrop-blur">
              {post.category}
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}

function ScopedStorySection({ content }: { content: StoryContent }) {
  const [selectedCategory, setSelectedCategory] = useState(content.categories[0])
  const visiblePosts = content.posts.filter((post) => post.category === selectedCategory)

  return (
    <section className="overflow-hidden bg-black py-10 text-white sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-container-max px-4 sm:px-6 md:px-margin-desktop">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="font-headline-xl text-2xl font-black uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-5xl">
              The Stories Behind The Journeys
            </h2>
            <FaHeart className="text-3xl text-[#ff2d72] md:text-5xl" aria-hidden="true" />
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-white/68 md:text-base">
            {content.description}
          </p>
        </div>

        <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-start lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6">
          <div className="min-w-0 md:col-start-2">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff9f1c]">Instagram videos</p>
                <h3 className="mt-1 text-2xl font-black text-white md:text-3xl">{selectedCategory}</h3>
              </div>
              <p className="rounded-full border border-white/12 px-4 py-2 text-xs font-bold text-white/68">
                {visiblePosts.length} posted videos
              </p>
            </div>
          </div>

          <aside className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3 md:sticky md:top-24 md:row-start-2 md:rounded-[28px] md:overflow-visible">
            <div className="flex items-center justify-between gap-3 px-3 pb-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/52">Categories</p>
            </div>
            <div className="relative min-w-0 overflow-hidden md:overflow-visible">
              <div className="flex max-w-full snap-x gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 pr-8 [scrollbar-width:none] md:flex-col md:overflow-visible md:pb-0 md:pr-0 [&::-webkit-scrollbar]:hidden">
                {content.categories.map((category) => {
                  const isActive = selectedCategory === category
                  const postCount = content.posts.filter((post) => post.category === category).length

                  return (
                    <button
                      key={category}
                      type="button"
                      className={`flex w-[150px] flex-none snap-start items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left text-sm font-extrabold transition-colors md:w-full md:min-w-0 ${isActive
                          ? 'bg-[#e85d04] text-white shadow-lg shadow-[#e85d04]/25'
                          : 'bg-white/8 text-white/76 hover:bg-white/14 hover:text-white'
                        }`}
                      aria-pressed={isActive}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                      <span className="rounded-full bg-black/18 px-2 py-0.5 text-[11px]">{postCount}</span>
                    </button>
                  )
                })}
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#171717] to-transparent md:hidden"
                aria-hidden="true"
              />
            </div>
          </aside>

          <div className="min-w-0 md:row-start-2">
            <div className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
              {visiblePosts.map((post) => (
                <div
                  key={post.title}
                  className="w-[78vw] max-w-[320px] flex-none snap-start sm:w-[320px] md:w-auto md:max-w-none"
                >
                  <StoryVideoCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ThirdSection({ holidayScope }: { holidayScope: HolidayScope }) {
  const content = STORY_CONTENT[holidayScope]

  return <ScopedStorySection key={holidayScope} content={content} />
}
