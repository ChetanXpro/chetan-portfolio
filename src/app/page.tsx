export default function Home() {
  return (
    <main className="flex w-full font-serif  text-[#212121]   min-h-screen flex-col    items-center justify-center   ">
      <div className="h-[90%] flex flex-col gap-6 items-center ">
        <div className="flex justify-center flex-col items-center gap-4  ">
          <h1 className="text-3xl underline text-blue-700 font-semibold">
            Chetan Baliyan
          </h1>
          <p className="italic font-semibold text-sm flex gap-2">
            contact me via{" "}
            <a
              href="mailto:chetanbaliyan10@gmail.com"
              className="underline text-blue-700"
            >
              email
            </a>{" "}
            or view my{" "}
            <a
              href="https://github.com/ChetanXpro"
              className="underline text-blue-700"
              target="_blank"
            >
              github
            </a>
            &
            <a
              href="https://twitter.com/Chetanbaliyan16"
              target="_blank"
              className="underline text-blue-700"
            >
              twitter
            </a>
          </p>
        </div>

        <h3>
          I love building things & I also do backpacking travel very often.
        </h3>

        <div className="flex flex-col gap-2">
          <h2 className="italic font-bold">Open Source Projects</h2>
          <div>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="">
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/nodejs-whisper"
                  target="_blank"
                >
                  <code>Nodejs-whisper</code>
                </a>
                <span>:</span> nodeJS Bindings for Whisper - the CPU version of
                OpenAI&apos;s Whisper.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/short-video-automation"
                  target="_blank"
                >
                  <code>Short-video-automation</code>
                </a>
                : A short content automation tool, which can generate short
                videos for YouTube and Instagram.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/video-transcoding-service"
                  target="_blank"
                >
                  <code>video-transcoding-service</code>
                </a>
                : A serverless video transcoding service which can run on AWS
                ECS and Lambda.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/chatgpt-telegram-bot"
                  target="_blank"
                >
                  <code>AI telegram bot</code>
                </a>
                : A Telegram Chat bot that sends you pictures in addition to
                responding to your questions, and text to speech.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/LaunchKit"
                  target="_blank"
                >
                  <code>LaunchKit</code>
                </a>
                : A Next.js template, featuring stripe, database,
                authentication, and email functionality integration.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/focus"
                  target="_blank"
                >
                  <code>focus</code>
                </a>
                : A CLI tool written in Rust to block distracting websites on
                the system level for a specific time and help stay focused.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/askme"
                  target="_blank"
                >
                  <code>askme</code>
                </a>
                : A CLI tool written in Go to chat with your PDF data.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/Document-AI"
                  target="_blank"
                >
                  <code>Document-AI</code>
                </a>
                : A tool to extract structured data from a PDF, offering a good
                open-source alternative to Google&apos;s Document AI.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/superbridge-dashboard"
                  target="_blank"
                >
                  <code>Superbridge-Dashboard</code>
                </a>
                : Track and update blockchain bridge transaction limits for
                supported tokens on your App chain.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/VideoSanitizer"
                  target="_blank"
                >
                  <code>VideoSanitizer</code>
                </a>
                : VideoSanitizer automatically censors or mutes explicit content
                in videos using AI.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/autosub"
                  target="_blank"
                >
                  <code>autosub</code>
                </a>
                : Automatically generate and overlay subtitles for any video.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/event-pilot"
                  target="_blank"
                >
                  <code>event-pilot</code>
                </a>
                : A real-time monitoring tool use Kafka and MongoDB to offer
                scalable and efficient event analysis.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro/rustis"
                  target="_blank"
                >
                  <code>rustis</code>
                </a>
                : A minimal Redis-compatible server implemented in Rust,
                utilizing no external dependencies for core functionality.
              </li>
              <li>
                <a
                  className="underline text-blue-700"
                  href="https://github.com/ChetanXpro"
                  target="_blank"
                >
                  <code className="text-sm">Explore more...</code>
                </a>
              </li>
            </ul>
          </div>

          {/* <h2>Publications &amp; Talks</h2>
        <div>
          <ul>
            <li>
              <a href="https://www.paradigm.xyz/2023/05/blend/">Blend</a>:
              peer-to-peer perpetual oracle-free lending protocol for arbitrary
              collateral
            </li>
            <li>
              <a href="https://www.paradigm.xyz/2022/08/vrgda/">VRGDAs</a>:
              novel continuously scheduled dutch auction mechanism
            </li>
            <li>
              <a href="https://twitter.com/transmissions11/status/1561100140160593920">
                0xMonaco
              </a>
              : on-chain engineering / game theory challenge for paradigm's 2022
              ctf
            </li>
            <li>
              <a href="https://www.paradigm.xyz/2022/09/goo/">GOO issuance</a>:
              mechanism for aligning non-fungible and fungible token issuance
            </li>
            <li>
              <a href="https://www.paradigm.xyz/2022/09/artgobblers/">
                Art Gobblers
              </a>
              : an experimental decentralized art factory owned by aliens
            </li>
            <li>
              <a href="https://github.com/transmissions11/solcurity/">
                Solcurity
              </a>
              : a security and code quality standard for solidity smart
              contracts
            </li>
            <li>
              <a href="https://eips.ethereum.org/EIPS/eip-4626">EIP-4626</a>: a
              standard for tokenized vaults with a single underlying ERC20 token
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=N9pJ9JieX10">
                Unicode 2021
              </a>
              : become a dapptools pilled chad in 30 minutes or your money back
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=58eKnYR_EyM">
                Solidity Fridays
              </a>
              : discussion of the design and optimization of vault contracts
            </li>
            <li>
              <a href="https://www.paradigm.xyz/2022/09/open-sourcing-gobblers/">
                Open Sourcing Gobblers
              </a>
              : notes on the development and testing of Art Gobblers
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </main>
  );
}
