const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        This is a React application designed to explore GitHub users and their
        repositories. You can search for users, view their profiles, and see
        details about their repositories.
      </p>
      <p>
        This application utilizes various components to provide a user-friendly
        experience. These components include:
      </p>
      <ul>
        <li>Users: A list of all available users.</li>
        <li>UserProfile: Detailed information about a specific user.</li>
        <li>SearchUser: A search bar to find users by username.</li>
        <li>
          Login: A login functionality for potential future features (not
          implemented yet).
        </li>
        <li>
          AuthProfile: User profile information after successful login (not
          implemented yet).
        </li>
        <li>RepoDetails: Detailed information about a specific repository.</li>
        <li>
          NotFound: A message displayed when a user or repository is not found.
        </li>
      </ul>
    </div>
  );
};
export default AboutUs;
