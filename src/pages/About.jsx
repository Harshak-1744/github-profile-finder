function About() {
    return (
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-6xl mb-4 text-center text-gray-800">GitHub Finder</h1>
          <p className="text-lg text-gray-600">
              The GitHub Finder is an intuitive, user-friendly application designed 
              to streamline the process of searching for GitHub profiles. Leveraging 
              the power of the GitHub API, this tool allows users to easily find and 
              display detailed information about GitHub users, including their repositories, 
              followers, and more.
          </p>
          <p className="text-lg text-gray-600 mt-4">
              Built with the latest web technologies, the GitHub Finder incorporates 
              <strong> React </strong> for efficient UI rendering and <strong> React Router </strong> 
              for seamless navigation. To enhance the user experience, the application is styled 
              with <strong> Tailwind CSS </strong>, a utility-first CSS framework that enables 
              responsive and customizable design elements. Furthermore, <strong> DaisyUI </strong> 
              is integrated to provide a collection of prebuilt UI components, making the interface 
              both attractive and user-friendly.
          </p>
          <p className="text-lg text-gray-600 mt-4">
              Whether you're a developer seeking to explore the work of your peers, or 
              a recruiter looking for potential candidates, GitHub Finder offers a 
              convenient and efficient way to browse GitHub profiles. Dive in and 
              experience the power of streamlined GitHub exploration!
          </p>
      </div>
    );
  }
  
  export default About;
  