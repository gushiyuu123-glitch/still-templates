import React from "react";

export default function VercelAnalyticsGuide() {
  return (
    <div className="max-w-4xl mx-auto prose prose-invert">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.14em] mb-6">
          Getting started with Vercel Web Analytics
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          This guide will help you get started with using Vercel Web Analytics on your project,
          showing you how to enable it, add the package to your project, deploy your app to Vercel,
          and view your data in the dashboard.
        </p>
      </section>

      {/* Prerequisites Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">Prerequisites</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-2">
              A Vercel account
            </h3>
            <p className="text-white/70">
              If you don't have one, you can{' '}
              <a href="https://vercel.com/signup" className="text-white hover:text-white/80 underline">
                sign up for free
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-2">
              A Vercel project
            </h3>
            <p className="text-white/70">
              If you don't have one, you can{' '}
              <a href="https://vercel.com/new" className="text-white hover:text-white/80 underline">
                create a new project
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-2">
              The Vercel CLI installed
            </h3>
            <p className="text-white/70 mb-4">
              If you don't have it, you can install it using one of the following commands:
            </p>
            <CodeBlock
              commands={[
                { tab: "pnpm", code: "pnpm i vercel" },
                { tab: "yarn", code: "yarn i vercel" },
                { tab: "npm", code: "npm i vercel" },
                { tab: "bun", code: "bun i vercel" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Enable Web Analytics */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">
          Enable Web Analytics in Vercel
        </h2>
        <p className="text-white/70 mb-4">
          On the{' '}
          <a href="/dashboard" className="text-white hover:text-white/80 underline">
            Vercel dashboard
          </a>
          , select your Project and then click the <span className="font-semibold">Analytics</span> tab
          and click <span className="font-semibold">Enable</span> from the dialog.
        </p>
        <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/70 mb-6">
          💡 <span className="font-semibold">Note:</span> Enabling Web Analytics will add new routes
          (scoped at <code className="bg-white/10 px-2 py-1 rounded">/_vercel/insights/*</code>) after
          your next deployment.
        </div>
      </section>

      {/* Add Package Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">
          Add @vercel/analytics to your project
        </h2>
        <p className="text-white/70 mb-6">
          Using the package manager of your choice, add the{' '}
          <code className="bg-white/10 px-2 py-1 rounded">@vercel/analytics</code> package to your
          project:
        </p>
        <CodeBlock
          commands={[
            { tab: "pnpm", code: "pnpm i @vercel/analytics" },
            { tab: "yarn", code: "yarn i @vercel/analytics" },
            { tab: "npm", code: "npm i @vercel/analytics" },
            { tab: "bun", code: "bun i @vercel/analytics" },
          ]}
        />
      </section>

      {/* Framework-Specific Instructions */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">
          Add the Analytics component to your app
        </h2>

        {/* Next.js Pages Router */}
        <FrameworkSection
          title="Next.js (Pages Router)"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with Next.js,
              including route support.
            </>
          }
        >
          <div className="space-y-6">
            <div>
              <p className="text-white/70 text-sm mb-3">
                If you are using the <code className="bg-white/10 px-2 py-1 rounded">pages</code>{' '}
                directory, add the following code to your main app file:
              </p>
              <CodeExample
                filename="pages/_app.tsx"
                code={`import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`}
              />
            </div>
            <div>
              <CodeExample
                filename="pages/_app.js"

                code={`import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Next.js App Router */}
        <FrameworkSection
          title="Next.js (App Router)"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with Next.js,
              including route support.
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm">
              Add the following code to the root layout:
            </p>
            <div>
              <CodeExample
                filename="app/layout.tsx"

                code={`import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}
              />
            </div>
            <div>
              <CodeExample
                filename="app/layout.jsx"

                code={`import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Remix */}
        <FrameworkSection
          title="Remix"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering a seamless integration with Remix, including
              route detection.
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm">
              Add the following code to your root file:
            </p>
            <div>
              <CodeExample
                filename="app/root.tsx"

                code={`import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}`}
              />
            </div>
            <div>
              <CodeExample
                filename="app/root.jsx"

                code={`import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Nuxt */}
        <FrameworkSection
          title="Nuxt"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with Nuxt, including
              route support.
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm mb-3">
              Add the following code to your main component:
            </p>
            <div>
              <CodeExample
                filename="app.vue"

                code={`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>`}
              />
            </div>
            <div>
              <CodeExample
                filename="app.vue"

                code={`<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* SvelteKit */}
        <FrameworkSection
          title="SvelteKit"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">injectAnalytics</code> function is a
              wrapper around the tracking script, offering more seamless integration with SvelteKit,
              including route support.
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm mb-3">
              Add the following code to the main layout:
            </p>
            <div>
              <CodeExample
                filename="src/routes/+layout.ts"

                code={`import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`}
              />
            </div>
            <div>
              <CodeExample
                filename="src/routes/+layout.js"

                code={`import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Astro */}
        <FrameworkSection
          title="Astro"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with Astro, including
              route support.
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm mb-3">
              Add the following code to your base layout:
            </p>
            <div>
              <CodeExample
                filename="src/layouts/Base.astro"

                code={`---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
      <meta charset="utf-8" />
      <!-- ... -->
      <Analytics />
	</head>
	<body>
		<slot />
    </body>
</html>`}
              />
            </div>
            <div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/70 mt-6 mb-6">
                💡 <span className="font-semibold">Note:</span> The{' '}
                <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is available
                in version <code className="bg-white/10 px-2 py-1 rounded">@vercel/analytics@1.4.0</code>{' '}
                and later. If you are using an earlier version, you must configure the{' '}
                <code className="bg-white/10 px-2 py-1 rounded">webAnalytics</code> property of the
                Vercel adapter in your <code className="bg-white/10 px-2 py-1 rounded">astro.config.mjs</code>{' '}
                file as shown in the code below. For further information, see the{' '}
                <a
                  href="https://docs.astro.build/en/guides/integrations-guide/vercel/#webanalytics"
                  className="text-white hover:text-white/80 underline"
                >
                  Astro adapter documentation
                </a>
                .
              </div>
              <CodeExample
                filename="astro.config.mjs"

                code={`import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Create React App */}
        <FrameworkSection
          title="Create React App"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with React.
              <div className="mt-2">
                <strong>💡 Note:</strong> When using the plain React implementation, there is no route
                support.
              </div>
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm mb-3">
              Add the following code to the main app file:
            </p>
            <div>
              <CodeExample
                filename="App.tsx"

                code={`import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`}
              />
            </div>
            <div>
              <CodeExample
                filename="App.jsx"

                code={`import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Vue */}
        <FrameworkSection
          title="Vue"
          description={
            <>
              The <code className="bg-white/10 px-2 py-1 rounded">Analytics</code> component is a
              wrapper around the tracking script, offering more seamless integration with Vue.
              <div className="mt-2">
                <strong>💡 Note:</strong> Route support is automatically enabled if you're using{' '}
                <code className="bg-white/10 px-2 py-1 rounded">vue-router</code>.
              </div>
            </>
          }
        >
          <div className="space-y-6">
            <p className="text-white/70 text-sm mb-3">
              Add the following code to your main component:
            </p>
            <div>
              <CodeExample
                filename="src/App.vue"

                code={`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>`}
              />
            </div>
            <div>
              <CodeExample
                filename="src/App.vue"

                code={`<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>`}
              />
            </div>
          </div>
        </FrameworkSection>

        {/* Plain HTML */}
        <FrameworkSection
          title="Plain HTML"
          description={
            <>
              For plain HTML sites, you can add the following script to your{' '}
              <code className="bg-white/10 px-2 py-1 rounded">.html</code> files:
            </>
          }
        >
          <div className="space-y-6">
            <CodeExample
              filename="index.html"

              code={`<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>`}
            />
            <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/70">
              💡 <span className="font-semibold">Note:</span> When using the HTML implementation, there
              is no need to install the <code className="bg-white/10 px-2 py-1 rounded">@vercel/analytics</code>{' '}
              package. However, there is no route support.
            </div>
          </div>
        </FrameworkSection>

        {/* Other Frameworks */}
        <FrameworkSection
          title="Other Frameworks"
          description={
            <>
              Import the <code className="bg-white/10 px-2 py-1 rounded">inject</code> function from the
              package, which will add the tracking script to your app.{' '}
              <strong>This should only be called once in your app, and must run in the client</strong>.
            </>
          }
        >
          <div className="space-y-6">
            <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/70 mb-6">
              💡 <span className="font-semibold">Note:</span> There is no route support with the{' '}
              <code className="bg-white/10 px-2 py-1 rounded">inject</code> function.
            </div>
            <p className="text-white/70 text-sm mb-3">
              Add the following code to your main app file:
            </p>
            <div>
              <CodeExample
                filename="main.ts"

                code={`import { inject } from "@vercel/analytics";

inject();`}
              />
            </div>
            <div>
              <CodeExample
                filename="main.js"

                code={`import { inject } from "@vercel/analytics";

inject();`}
              />
            </div>
          </div>
        </FrameworkSection>
      </section>

      {/* Deploy Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">
          Deploy your app to Vercel
        </h2>
        <p className="text-white/70 mb-6">
          Deploy your app using the following command:
        </p>
        <CodeExample
          filename="terminal"

          code={`vercel deploy`}
        />
        <p className="text-white/70 mt-6 mb-6">
          If you haven't already, we also recommend{' '}
          <a href="/docs/git#deploying-a-git-repository" className="text-white hover:text-white/80 underline">
            connecting your project's Git repository
          </a>
          , which will enable Vercel to deploy your latest commits to main without terminal commands.
        </p>
        <p className="text-white/70 mb-6">
          Once your app is deployed, it will start tracking visitors and page views.
        </p>
        <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm text-white/70">
          💡 <span className="font-semibold">Note:</span> If everything is set up properly, you should
          be able to see a Fetch/XHR request in your browser's Network tab from{' '}
          <code className="bg-white/10 px-2 py-1 rounded">/_vercel/insights/view</code> when you visit
          any page.
        </div>
      </section>

      {/* View Data Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">
          View your data in the dashboard
        </h2>
        <p className="text-white/70 mb-6">
          Once your app is deployed, and users have visited your site, you can view your data in the
          dashboard.
        </p>
        <p className="text-white/70 mb-6">
          To do so, go to your{' '}
          <a href="/dashboard" className="text-white hover:text-white/80 underline">
            dashboard
          </a>
          , select your project, and click the <span className="font-semibold">Analytics</span> tab.
        </p>
        <p className="text-white/70 mb-6">
          After a few days of visitors, you'll be able to start exploring your data by viewing and{' '}
          <a href="/docs/analytics/filtering" className="text-white hover:text-white/80 underline">
            filtering
          </a>{' '}
          the panels.
        </p>
        <p className="text-white/70">
          Users on Pro and Enterprise plans can also add{' '}
          <a href="/docs/analytics/custom-events" className="text-white hover:text-white/80 underline">
            custom events
          </a>{' '}
          to their data to track user interactions such as button clicks, form submissions, or purchases.
        </p>
      </section>

      {/* Privacy Section */}
      <section className="mb-16">
        <p className="text-white/70">
          Learn more about how Vercel supports{' '}
          <a href="/docs/analytics/privacy-policy" className="text-white hover:text-white/80 underline">
            privacy and data compliance standards
          </a>{' '}
          with Vercel Web Analytics.
        </p>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-light tracking-[0.12em] mb-8 text-white">Next steps</h2>
        <p className="text-white/70 mb-6">
          Now that you have Vercel Web Analytics set up, you can explore the following topics to learn
          more:
        </p>
        <ul className="space-y-3 text-white/70">
          <li>
            • <a href="/docs/analytics/package" className="text-white hover:text-white/80 underline">Learn how to use the @vercel/analytics package</a>
          </li>
          <li>
            • <a href="/docs/analytics/custom-events" className="text-white hover:text-white/80 underline">Learn how to set update custom events</a>
          </li>
          <li>
            • <a href="/docs/analytics/filtering" className="text-white hover:text-white/80 underline">Learn about filtering data</a>
          </li>
          <li>
            • <a href="/docs/analytics/privacy-policy" className="text-white hover:text-white/80 underline">Read about privacy and compliance</a>
          </li>
          <li>
            • <a href="/docs/analytics/limits-and-pricing" className="text-white hover:text-white/80 underline">Explore pricing</a>
          </li>
          <li>
            • <a href="/docs/analytics/troubleshooting" className="text-white hover:text-white/80 underline">Troubleshooting</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

// Helper Components
function CodeBlock({ commands }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden mb-6">
      <div className="flex border-b border-white/10">
        {commands.map((cmd, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-xs tracking-[0.25em] uppercase transition ${
              activeTab === i
                ? "text-white bg-white/10"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            {cmd.tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        <code className="text-sm text-white/80 font-mono">
          <span className="text-white/40">$ </span>
          {commands[activeTab].code}
        </code>
      </div>
    </div>
  );
}

function CodeExample({ filename, code }) {
  return (
    <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden mb-4">
      <div className="px-4 py-3 border-b border-white/10 text-xs text-white/60">
        {filename}
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-white/80 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FrameworkSection({ title, description, children }) {
  return (
    <div className="mb-12 p-6 rounded-lg border border-white/10 bg-white/5">
      <h3 className="text-lg font-light tracking-[0.1em] mb-3 text-white">{title}</h3>
      <div className="text-sm text-white/70 mb-6">{description}</div>
      {children}
    </div>
  );
}
