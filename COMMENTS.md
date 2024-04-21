
### Comentários sobre o Projeto

#### Decisão da Arquitetura Utilizada

Para este projeto, optei por seguir uma arquitetura baseada em componentes, usando o Vue.js para o frontend. A arquitetura de componentes oferece modularidade e reutilização de código, facilitando o desenvolvimento e manutenção do projeto. Além disso, escolhi integrar o Vuetify como framework de UI, pois ele oferece uma ampla gama de componentes pré-construídos e um design consistente, acelerando o desenvolvimento e fornecendo uma experiência de usuário consistente.
 
#### Lista de Bibliotecas de Terceiros Utilizadas
###### As principais bibliotecas de terceiros utilizadas neste projeto são:
 
 - **Vue.js**: Um framework progressivo para construção de interfaces de usuário.

- **Vuetify**: Um framework de UI baseado em Material Design para Vue.js.

- **Axios**: Uma biblioteca para fazer requisições HTTP no navegador e no Node.js.

- **Vue Router**: Biblioteca oficial de roteamento para aplicativos Vue.js.

- **Vuex**: Um padrão de gerenciamento de estado e biblioteca para aplicativos Vue.js.

Além disso, outras bibliotecas e ferramentas foram utilizadas para tarefas específicas, como formatação de datas, validação de formulários, etc.
 
## implementação do Docker e Kubernetes

O projeto foi configurado com Docker para facilitar a entrega e a execução em ambientes de desenvolvimento, teste e produção. O Dockerfile incluído no repositório permite a construção de uma imagem Docker para o aplicativo Vue.js, garantindo que as dependências sejam empacotadas junto com o aplicativo e possam ser executadas em qualquer ambiente compatível com o Docker.

Para executar o contêiner Docker localmente, você pode usar os seguintes comandos:

```bash
# Usando docker run
docker build -t front .
docker run -p 8080:80 front

# Usando docker-compose
docker-compose up -d

```

Além disso, foi implementado um manifesto do Kubernetes para facilitar a implantação do aplicativo em um cluster Kubernetes. O arquivo `deployment.yaml` contém as especificações de implantação do aplicativo, incluindo o número de réplicas, configurações de volume, configurações de serviço, etc.

```bash
kubectl apply -f ./.k8s/deployment.yaml
```
O arquivo `deployment.yaml` contém as especificações de implantação do aplicativo, incluindo o número de réplicas, configurações de volume, configurações de serviço, etc.

Além do arquivo de implantação, também foi criado um arquivo de serviço (`service.yaml`) para expor o aplicativo para o tráfego externo. O arquivo de serviço define um serviço Kubernetes do tipo LoadBalancer para expor o aplicativo na porta 80.

Você pode implantar o serviço junto com o aplicativo usando o seguinte comando:

```bash
kubectl apply -f service.yaml
```

O arquivo `service.yaml` contém as especificações do serviço Kubernetes, incluindo o tipo de serviço, porta de destino, portas expostas, etc.


## Implementação do CI/CD com GitHub Actions

Foi configurado um pipeline de CI/CD com GitHub Actions para automatizar o processo de construção, publicação e entrega da imagem do contêiner para o cluster Kubernetes. O pipeline é acionado automaticamente sempre que um novo código é enviado para o repositório no GitHub.

O pipeline consiste nas seguintes etapas:

1. **Build do Aplicativo**: O código do aplicativo é clonado e uma nova imagem Docker é construída usando o Dockerfile fornecido no repositório.

2. **Testes Automatizados**: O pipeline executa testes automatizados para garantir que o código esteja funcionando conforme o esperado.

3. **Publicação da Imagem Docker**: Após a construção bem-sucedida, a imagem Docker é publicada em um registro de contêiner, como Docker Hub ou GitHub Container Registry.

4. **Implantação no Kubernetes**: Finalmente, a nova versão da imagem do contêiner é implantada no cluster Kubernetes usando o manifesto de implantação e serviço fornecido no repositório.

Isso permite que o aplicativo seja atualizado de forma contínua e automatizada sempre que houver uma alteração no código-fonte, garantindo um processo de entrega rápido e confiável.

