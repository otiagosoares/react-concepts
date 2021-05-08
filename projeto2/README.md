# Project 2 - React Hooks

## Regra dos Hooks
  -
## useState
  - const [state, setstate] = useState(initialState)

## useEffect

```
  //componentDidMount - executa 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, [])

  //componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  })

  //Com Dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2', counter2);
  }, [counter, counter2])
  })

  //limpa memoria
  useEffect(() => {

    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      console.log('componentWillUmount')
      document.querySelector('h1').removeEventListener('click', eventFn);
    }
  }, [])

```


