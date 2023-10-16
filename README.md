### Detalhes da API:

  Endpoint unico: A API oferece um único endpoint acessível por meio do método GET, que pode ser encontrado em: https://api-random-cm8d.onrender.com/. Ao fazer uma solicitação GET para este endpoint, você receberá uma resposta contendo uma mensagem aleatória.

  Exemplo:

```js
async function api(){
  const res = await fetch("https://api-random-cm8d.onrender.com/")
  const data = await res.json()
  
  return data
}
```

```json
{
  "status": 200,
  "mensage": "Tudo é possível quando você acredita."
}
```

### Recursos Principais:

  Mensagens Aleatórias: A API foi projetada para fornecer mensagens aleatórias toda vez que o endpoint é chamado.

### Gratuita e de Código Aberto:

  A API é um projeto de código aberto e é totalmente gratuita para uso. Os desenvolvedores podem acessá-la e integrá-la em seus aplicativos, websites e projetos pessoais ou comerciais sem custo algum. A gratuidade desta API faz parte de seu propósito educacional e de estudo.

### Latência na Render:⚠️

  Devido à sua gratuidade, a API pode apresentar latência variável em seus tempos de resposta, uma vez que a plataforma Render é utilizada para hospedar o serviço. A latência pode ocorrer especialmente durante picos de uso, quando muitos usuários estão acessando a API simultaneamente. É importante estar ciente dessa possível latência ao incorporar a API em seus projetos.

- É importante ressaltar que este projeto é voltado exclusivamente para fins educacionais e de aprendizado.

### get started project

    # clone o repositorio
    git clone < repositorio >

    # open project
    cd ./ < name project >

    # install all dependencias
    yarn install
    or
    npm install

    # started application
    yarn dev
    or
    npm run dev