import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This website uses Google Analytics to collect anonymous information such as the number of visitors to the site, and the most popular pages.
      </p>
      <p className="mb-4">
        Keeping this cookie enabled helps us to improve our website.
      </p>
      <p className="mb-4">
        The cookies collected by Google Analytics are used to produce aggregated, anonymous statistics about the use of the website. This information is used to improve our services and understand how people use our site.
      </p>
      <p className="mb-4">
        For more information on how Google processes your data, visit <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline">Google's Privacy & Terms site</a>.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

