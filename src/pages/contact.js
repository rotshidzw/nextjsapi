 /* eslint-disable no-alert, no-console */
import Layout from '../components/Layout';
import ErrorBoundary from './ErrorBoundary';
const contact = () => {


  return (
    <ErrorBoundary>
   <Layout title="Contact Us" className="">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">
          Contact Us
        </h2>
        <p className="text-center mt-4">
          Fill out the form below to get in touch with us.
        </p>
        <form className="mt-8" 
        action="https://getform.io/f/8f58c1a7-a3d4-4ea6-8a36-96c8a17f75fb"
        method="POST">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-900 focus:ring-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-900 focus:ring-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-900 focus:ring-gray-900"
              required
            ></textarea>
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 mt-8 font-semibold text-white hover:border hover:border-gray-900 hover:text-black bg-gradient-to-b  bg-black rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
            </button>
            </div>
          </form>
        </div>
    </Layout>
    </ErrorBoundary>
  )
}

export default contact