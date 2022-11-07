const Paginate = (repos) => {
    const REPOS_PER_PAGE = 5;
    const PAGES = Math.ceil(repos.length / REPOS_PER_PAGE);
  
    const NEW_USERS = Array.from({ length: PAGES }, (_, index) => {
      const START = index * REPOS_PER_PAGE;
      return repos.slice(START, START + REPOS_PER_PAGE);
    });
  
    return NEW_USERS;
  };
  
  export default Paginate;