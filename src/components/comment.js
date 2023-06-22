  /*      //QUESTO è LO USE EFFECT CON LE DIPENDENZE CHE DOPO OGNI RERENDERING DELLA DIPENDENZA LUI ESEGUIRA DI NUOVO LO USE EFFECT(BEST PRACTICES NON DICHIARARE DIPENDENDENZE CHE MUTANO PERCHé CREEREBBE UN LOOP)
  useEffect(()=>{
    console.log(2)
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
    .then(res=> res.json())
    .then((data=>setPosts(data)))
   },[stories]) ; */

  /*   useEffect(() => {
    console.log("Ho invocato lo useEffect");
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    return () => {
      console.log("ho invocato il return dell'useEffect");
      //clean-up function
    };
  }, [stories]);
 */

  
  /*   1)useEffect che però genera un loop infinito
   useEffect(()=>{
    console.log(2)
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
    .then(res=> res.json())
    .then((data=>setPosts(data)))
   }) */