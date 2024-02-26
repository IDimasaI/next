const handler = (req, res) => {
    let {
      query: { pid },
    } = req;
    
    res.end(`Post: ${pid}`);
  };
  
  export default handler;