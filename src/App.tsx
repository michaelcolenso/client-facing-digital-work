export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Client-Facing Digital Work</h1>
        <div className="h-1 w-16 bg-indigo-500 mb-14" />

        {/* Cloudmunch */}
        <article className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cloudmunch</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I worked on building a DevOps management tool for enterprise customers. It was primarily
            a client-side JavaScript app (PHP backend), built with Backbone.js, Sass and Grunt, and
            unfortunately I can't send you a link because it's yet to be publicly released (and I
            signed an NDA).
          </p>
          <p className="text-gray-600 mb-4">Here's a screenshot, though:</p>
          <img
            src="http://i.imgur.com/oxC10X3.png"
            alt="Cloudmunch Screenshot"
            className="rounded-lg shadow-md max-w-full"
          />
        </article>

        {/* Adonit */}
        <article className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adonit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Adonit builds and sells{' '}
            <a
              href="http://www.adonit.net/jot/"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              digital styluses
            </a>
            . (I actually prefer <em>stylii</em> as the plural, but it maybe sounds kind of
            pretentious…)
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            During my time there I collaborated with a small distributed team (myself, another dev,
            a designer, and a PM) to implement a complete re-architecture, redesign, and rebuild of
            Adonit's marketing and e-commerce web applications from WordPress to the Shopify
            platform. From an engineering standpoint, we focused on speed and performance (combined
            Shopify's checkout processing with our own static product catalog pages), and it paid
            off with measurable improvements in engagements, conversions, and ultimately, revenue.{' '}
            <a
              href="http://www.adonit.net/"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              You can see our completed work here.
            </a>
          </p>
          <img
            src="http://i.imgur.com/4yVnUoH.jpg"
            alt="Adonit screenshot"
            className="rounded-lg shadow-md max-w-full"
          />
        </article>

        {/* CP+B */}
        <article className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">CP+B</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At{' '}
            <a
              href="http://www.cpbgroup.com/"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Crispin Porter + Bogusky
            </a>
            , a rather{' '}
            <a
              href="https://en.wikipedia.org/wiki/Crispin_Porter_%2B_Bogusky"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              notorious
            </a>{' '}
            global advertising agency, the most visible projects I worked on were probably{' '}
            <a href="http://applebees.com" className="text-indigo-600 hover:text-indigo-800 underline">
              applebees.com
            </a>{' '}
            and{' '}
            <a href="http://arbys.com" className="text-indigo-600 hover:text-indigo-800 underline">
              arbys.com
            </a>
            . Both were large, complex sites using a variety of technologies on the front and
            back-ends. My work on these sites was mostly maintenance, bugfixes, and a hodgepodge of
            minor feature updates or marketing/content work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I was also lucky enough during my time at CP+B to be involved with a project called{' '}
            <a
              href="http://black.thegifys.com/"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              "The Gifys"
            </a>
            , which was conceived of by some creatives in the LA office as the "world's first award
            show for the animated GIF". The agency generously gave what was initially a side project
            a degree of official support and devoted some resources to building and{' '}
            <a
              href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=the+gifys&safe=off"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              promoting
            </a>{' '}
            it, and it turned out awesome.
          </p>
          <img
            src="http://i.imgur.com/rwvMdVW.gif"
            alt="The Gifys"
            className="rounded-lg shadow-md max-w-full mb-6"
          />
          <p className="text-gray-600 leading-relaxed mb-4">
            The site (which I built with Node/Express) was even a{' '}
            <a
              href="http://webbyawards.com/winners/2014/web/general-website/weird/the-gifys/"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              2014 Webby Award Winner
            </a>
            . It was a super fun and rewarding collaboration with smart, funny, and creative people,
            and is one of my favorite things I've made on the internet.
          </p>
          <img
            src="http://i.imgur.com/y8NttXM.gif"
            alt="Much excite"
            className="rounded-lg shadow-md max-w-full"
          />
        </article>
      </div>
    </div>
  )
}
