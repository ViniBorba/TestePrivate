## Referencias para esse projeto:
[Cronômetro](https://medium.com/walternascimentobarroso-pt/cronômetro-em-js-9b440308090)\
[JavaScript windows e alert](https://www.w3schools.com/jsref/met_win_alert.asp)\
[button no HTML e CSS](https://uiverse.io/detail/adamgiebl/giant-donkey-36)

---
# Links
---
# Estrutura de pastas
```
- projeto
-- src
--- package 
```
---
# Estrutura do projeto
```
- interface
-- class
--- metodo (void ou return)
```
---
# Estrutura do codigo
```
- directory/package
-- file
--- class
---- metodo (void ou return)
----- instrucoes
```
---
# Estrutura de uma classe
    //Classe
    public classe **NomeDaClasse** extends **NomeDaInterface** ou **abstract class**{
        int variavelNum;
        String variavelObj;

        //Construtor
        **NomeDaClasse**(int argumentoInt, String argumentoObj, boolean argumentoDaSuperClasse){
            super(argumentoDaSuperClasse);
            this.variavelNum = argumentoInt;
            this.variavelObj = argumentoObj;
        }

        //Metodos
        public void metodoSemRetorno(Argumentos){
            //instrucoes
        }

        public int metodoComRetorno(Argumento){
            //instrucoes
        }
        return int;
    }

# Interface

Interface é como uma forma, um esqueleto, contem somente a forma, mas não tem nem um conteúdo.
>   Como declarar: **interface MinhaInterface { ... }**\
>   Como usar: **class MinhaClasse implements MinhaInterface{ ... }**
### Caracteristicas:
* Uma interface não pode ser instanciada, não gera objetos.
* Uma interface não tem argumentos, apenas a forma dos métodos
* Na implementação todos os métodos da interface devem ser subscritos (@Override)
* Interface não pode ter um construtor.
---
# Classe abstrata
Parecido com uma interface, é como uma forma pré preenchida. 
> Como declarar: **abstract class ClasseAbstrata { ... }**\
> Como usar: **class Classe extends ClasseAbstrata { ... }**

### Caracteristicas:
- Pode ter método regular e/ou método abstrato.
- No caso de método abstrato, deve ser declarado:
    - **public abstract void metodoAbstrato()**.
- O método regular pode ser reescrito (@Override)
- Uma classe abstrata não pode ser instanciada, não gera objetos.
- Pode ter construtor.
---	
# Diferença entre **interface** e **classe abstrata**
| **Interface**                                  | **Classe Abstrata**
|------------------------------------------------|----------------------
| implements                                     | extends
| Somente descreve um método                     | pode construir o método
| não tem construtor                             | pode ter construtor
| na classe posso implementar + de 1 interface   | na classe extende apenas uma classe abstrata

---
# Enums
Enums é um tipo de classe, usamos para manter os valores declarados fixos, imutáveis. Pode ter atributos e métodos.
> Como declarar: public enum MeuEnum{ LOW, MEDIUM, HIGH }\
> Como usar: MeuEnum enumCriado = MeuEnum.MEDIUM;
### Caracteristicas:	
- Pode ser declarado dentro de uma classe.
- Os valores declarados no Enum são passados utilizando ponto(.)
- Enum não pode criar objeto.
- Enum não pode extender uma classe abstrata.
---
# Classes
É a base da orientação a objeto, é na classe que acontece tudo, é como uma planta baixa.
Na classe é criado os métodos, variaveis e feito as construções.
> Como declarar: public classe MinhaClasse { ... }\
> Como usar: MinhaClasse umaInstancia = new MinhaClasse();
### Caracteristicas:
- De uma classe pode ser criado várois objetos, basta instanciar a classe.
- Uma classe pode extender uma classe abstrata (extends)
- Uma classe pode implementar várias interfaces (implements)
- Métodos são criados dentro de uma classe
---
# Métodos
São como ferramentas de uma classe que ajudam a resolver parte do problema que a classe se propõe a atender.\
Um método é parte de uma classe.\
Pode ser do tipo sem retorno ou com retorno.
> Como declarar: public static int passandoNumero(int umParametro) { ... return int }\
> Como usar: umaInstancia.passandoNumero(3)
### Caracteristicas:
- Metodo **void** é um método **sem retorno**, ele pode ou não receber parametros, um ou mais, e então processa as instruções de dentro do método.
    - **public void metodoSemRetorno(){ ... }**
- Um metodo pode **retornar** um parametro, estado ou valor, nesse caso sempre deve retornar o tipo que foi declarado e no método e sempre tem um return
    - **public String metodoComRetorno(){... return String}**
- Métodos **Overloading** são métodos que tem o mesmo nome, isso pq pode ter diferentes tipos de retorno. Como um método retorn só um tipo, podemos criar um método para cada tipo.
    - **public int overloadingMetodo (){ ... return int }**
    - **public float overloadingMetodo (){ ... return float }**
- No **scopo do Java** somente é possível usar a variavel abaixo da sua declaração e dentro do mesmo bloco.
- Um **método recursivo** é uma técnica onde o método chama ele mesmo. Em cascata a resposta vai sendo retornada.
    - **public int metodoRecursivo(){ ... return metodoRecursivo }**
    - **private int metodoRecursivo(){ .. return int }**

---
# Encapsulamento
É uma forma que proteger todos os dados de uma classe, assim não é possível acessar diretmanete os dados.
No encapsulamento os dados são declarados como *private*

---
# Satatic
Tem alguma coisa a ver a ser usada dentro do main, não em um objeto, algo assim...

---

---

Livros:
 - Domain Driven Design
 - Clean Code
 
 Estudar:
- O que é Spring Boot
- Spring Boot Annotations
- end point spring boot
- O que são Web Services
	- RESTful Web Services
- design pattern java
- Factory Method

# Diretrizes para a escrita de códigos

## Âmbito da Preparação do Ambiente
#### Diretriz 1: Encoding
- UTF-8?

---
## Âmbito da Estrutura das Classes
> Dê preferência em adornar as classes implantadoras de interfaces utilizando o sufixo ‘Impl’;
> Ex.: public class SalvarCommandImpl implements Command {}


> Separe as Interfaces das classes implantadoras utilizando um pacote ‘impl’
> Ex.: br.com.nbcbank.api.domain (Interfaces) e br.com.nbcbank.api.domain.impl (Classes implantadoras)

#### Diretriz 1: Nomes de Classes (interface, classe abstrata)
Procurar usar termos **substantivos**\
Evitar palavras ambíguas como registro/registrar, calculo/calcular processo/processar\
> Bons exemplos de nome seriam:\
> Usuário, Cartão, Proposta, Cliente, FluxoFinanceiro, Transporte, Relatório, Dispositivo


> Evite nomes concretos para as Classes
> Notificação ao invés de NotificacaoEmail, Cadastro ao invés de CadastroFuncionario


> Utilize nomes concretos para instâncias de objetos
> accountAddress, cadastroFuncionario, notificacaoEmail

#### Diretriz 2: Nomes de Atributos
Atributos não existem fora do **contexto da classe**, por isso representam **adjetivos da classe**, ou seja, qualidade e características que se deseja atribuir à classe.

> Bons exemplos de nome seriam:\
> public class Usuario { private String nome; }\
> public class FluxoFinanceiro { private BigDecimal movimentoMensal; }\
> public class Dispositivo { private String modelo;}

#### Diretriz 3: Nomes de Métodos (Funções)
Métodos são representações de ações\
Ao nomear métodos, devemos deixar clara a ação esperada por ele\
O nome deve-se limitar ao escopo da classe

> Bons exemplos de nome seriam:\
> FluxoCaixa.calcularPatrimonioLiquido();\
> Dispositivo.conectar();\
> Transporte.abrirPortas()

#### Diretriz 4: Construtor Sobrecarregado
Quando a classe possuir construtores sobrecarregados, opte por criar métodos públicos mais descritivos, ocultando o construtor (private) para o acesso direto.

#### Diretriz 5: Método com Responsabilidade Única
O princípio da responsabilidade única (SRP – Single Reponsability Principle) estabelece que:\
**Uma classe deve ter uma única razão de existir**\
**Cada método deve ter uma única responsabilidade**, um único motivo de existir.

#### Diretriz 6: Métodos Pequenos
Quando escrever um método, mantenha-o pequeno, no máximo 20 linhas.\
Caso, durante a criação do método, a lógica se torne complexa, opte por criar sub-métodos que permitam atingir o tal objetivo.

#### Diretriz 7: Evite Estruturas Aninhadas dentro dos Métodos
Mantenha os métodos com apenas 1 nível de abstração, ou seja, apenas uma estrutura de laço ou uma estrutura condicional\
Caso a lógica exija mais níveis internos na estrutura, opte por criar métodos para abstrair a necessidade e manter a simplicidade de tamanho do método.\
Métodos recursivos podem ser boas opções nesse caso?

#### Diretriz 8: Objetive a Construção de Métodos Niládicos ou Monádicos
Busque sempre a criação de métodos com estrutura niládica (sem argumentos) ou monádicas (um argumento).\
Evite construir métodos poliádicos (múltiplos argumentos), neste caso, divida o método em outros métodos ou até mesmo pense em construir um objeto, abstraindo os argumentos necessários.

> Bons exemplos seriam:\
> public Circle makeCircle(double x, double y, double radius);
> public Circle makeCircle(Point center, double radius);

#### Diretriz 9: Não use Booleanos como Argumento de Métodos
Variáveis booleanas como argumentos não permite criar métodos com responsabilidade única.\
Ou seja, o cenário de execução terá mais de uma opção de execução sempre.

---
## Âmbito de um Enum (Enumeradores)
Use sempre maísculas e o padrão de escrito SnakeCase

#### Diretriz 1: Condicionais através de um Enum
Quando houver a necessidade de criar condicionadores, ou “flag”, opte por criar Enum no código do projeto.

#### Diretriz 2: Enum no Lugar de Uso
Quando houver a necessidade de criar um Enum, crie-o dentro do pacote onde o uso do mesmo será requisitado.

#### Diretriz 3: Nomenclatura dos Enum com Estilo SnakeCase
Ao criar os itens de um Enum, use o estilo SnakeCase nos nomes
> Bons Exemplos seriam:
> public enum TipoPessoa {PESSOA_FISICA, PESSOA_JURIDICA }

--
# Arquitetura de Sistemas (interna)
- Procurar e definir Caso de uso
- Procurar e definir Backlog
- Procurar com.mydomain.myapp.controller
- Procurar com.mydomain.myapp.service
- Procurar com.mydomain.myapp.repository

## Princípios para a construção de componentes coesos
- Coesão do Componente – REP (The Reuse/Release Equivalence Principle)
	- Este princípio estabelece o empacotamento de classes e módulos que são compatíveis entre si
- Coesão do Componente – CCP (The Common Closure Principle)
	- Este princípio estabelece a construção de um componente agrupando classes segundo sua dependência de implantação.
- Coesão do Componente – CRP (The Common Reuse Principle)
	- Este princípio estabelece que classes e módulos que podem ser reutilizado juntos devem compor um componente\
	
## **SOLID**

#### **S**OLID – SRP (Single Responsability Principle)
Exemplo:\
		public class Main {
		  Alerta alerta = new Alerta();
		  alerta.gerarAlerta();

		  Notificacao notificacao = new Notificacao(alerta);
		  Notificacao.enviarSMS();
		}
		
		public class Alerta {
			public void gerarAlerta(){
			// implantação do método
			}
		}
		
		public class Notificacao {
		  private Alerta alerta;

		  public Notificacao(Alerta alerta) {
			 // implantação do método
		  }

		  public void enviarSMS() {
			 // implantação do método
		  }

		  public void enviarEMail() {
			 // implantação do método
		  }
		}
		
#### S**O**LID – OCP (The Open-Closed Principle)
Classes estão abertas à extensão do seu comportamento, mas não a modificação de um comportamento já existente.\
Exemplo é um uso de classe abstratata

#### SO**L**ID – LSP (The Liskov Substitution Principle)
A dependência, de uma classe, módulo ou componente, está em uma abstração e não na classe concreta, sendo assim a implementação pode substituir a abstração sem comprometer o sistema.

#### SOL**I**D – ISP (The Interface Segregation Principle)
Este princípio advoga que nenhuma classe herde ou dependa de características que não fará uso.

#### SOLI**D** – DIP (The Dependency Inversion Principle)
Este princípio orienta que um sistema deve depender ao máximo de abstrações e para manter a construção isolada, fazer uso da Design Pattern Abstract Factory ou Factory Method

## Design Patterns

Design Patterns criam camadas de abstração ao código. Através destas abstrações ela permite códigos mais flexíveis e robustos\

> As camadas de abstração são:
> **Criacional**
> **Estrutural**
> **Comportamental**

- Criacional
	- Sob o escopo da classe: Transfere a criação de parte do objeto à uma subclasse
	- Sob o escopo do objeto: Transfere a criação do objeto para outro objeto
- Estrutural
	- Sob o escopo da classe: Faz uso de herança para compor a classe
	- Sob o escopo do objeto: Descreve a forma como os objetos são montados (composição/agregação)
- Comportamental
	- Sob o escopo da classe: Faz uso de herança para descreve algoritmos ou fluxos de control
	- Sob o escopo do objeto: Como um grupo de objetos colabora na execução de uma tarefa; (composição/agregação)
