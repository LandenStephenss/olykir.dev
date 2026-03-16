export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">About Me</h2>
          <p className="text-xl text-slate-400">
            Developer, creator, and automotive enthusiast
          </p>
        </div>
        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
          <p>
            Hey, I&apos;m{" "}
            <strong className="text-rose-400">Landen Stephens</strong> – a web
            and firmware developer with a passion for both cutting-edge
            technology and automotive culture. By day, I&apos;m building
            innovative solutions at{" "}
            <strong className="text-rose-400">VibeCTRL</strong>, working on
            everything from embedded systems to modern web applications.
          </p>
          <p>
            My technical expertise spans across{" "}
            <strong className="text-rose-400">React</strong>,{" "}
            <strong className="text-rose-400">Preact</strong>, and{" "}
            <strong className="text-rose-400">Node.js</strong> for web
            development, while I dive deep into firmware development for
            hardware integration. I&apos;ve built robust systems using{" "}
            <strong className="text-rose-400">Discord.js</strong> and created
            scalable applications with{" "}
            <strong className="text-rose-400">NextJS</strong> and other modern
            frameworks.
          </p>
          <p>
            Beyond the code, I&apos;m a content creator sharing my love for cars
            on{" "}
            <a href="https://tiktok.com/@olykir">
              <strong className="text-rose-400">TikTok</strong>
            </a>{" "}
            and{" "}
            <a href="https://instagram.com/rt.olykir">
              <strong className="text-rose-400">Instagram</strong>
            </a>
            . I create engaging automotive content that connects with car
            enthusiasts, showcasing builds, car culture, and everything that
            makes the automotive world exciting.
          </p>
          <p>
            Whether I&apos;m debugging firmware, building web applications, or
            filming content for social media, I bring the same passion and
            attention to detail to everything I do. Let&apos;s build something
            amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
