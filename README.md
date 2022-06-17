# Links


# Estrutura de pastas
> projeto
  > src
    > package   

# Estrutura do projeto
> interface
  > class
    > metodo (void ou return)

# Estrutura do codigo
> directory/package
  > file
    > class
      > metodo (void ou return)
        > instrucoes

# Estrutura de uma classe
public classe **NomeDaClasse** extends **NomeDaInterface** ou **abstract class**{
  int variavelNum;
  String variavelObj;
  
  //Construtor
  **NomeDaClasse**(int argumentoInt, String argumentoObj, boolean argumentoDaSuperClasse){
    super(argumentoDaSuperClasse);
    this.variavelNum = argumentoInt;
    this.variavelObj = argumentoObj;
    
    //Metodos
    public void metodoSemRetorno(Argumentos){
      //instrucoes
    }
    
    public int metodoComRetorno(Argumento){
      //instrucoes
      return int;
    }
  }
}


# Interface
Interface é como uma forma, um esqueleto, contem somente a forma, mas não tem nem um conteúdo.
	> Como declarar: **interface MinhaInterface { }**
	> Como usar: **class MinhaClasse implements MinhaInterface{ }**
Caracteristicas:
- Uma interface não pode ser instanciada, não gera objetos.
- Uma interface não tem argumentos, apenas a forma dos métodos
- Na implementação todos os métodos da interface devem ser subscritos (@Override)
- Interface não pode ter um construtor.
	
# Classe abstrata
Parecido com uma interface, é como uma forma pré preenchida. 
	> Como declarar: **abstract class ClasseAbstrata { }**
	> Como usar: **class Classe extends ClasseAbstrata { }**
Caracteristicas:
- Pode ter método regular e/ou método abstrato.
No caso de método abstrato, deve ser declarado: **public abstract void metodoAbstrato()**.
O método regular pode ser reescrito (@Override)
- Uma classe abstrata não pode ser instanciada, não gera objetos.
- Pode ter construtor.
	
# Diferença entre interface e classe abstrata
	> Interface: implements | Classe Abstrata: extends
	> Interface: Somente descreve um método | Classe Abstrata: pode construir o método
	> Interface: não tem construtor | Classe Abstrata: pode ter construtor
	> Interface:na classe posso implementar + de 1 interface | Classe Abstrata: extende somente 1 vez???
	
# Enums
Enums é um tipo de classe, usamos para manter os valores declarados fixos, imutáveis. Pode ter atributos e métodos.
	> Como declarar: public enum MeuEnum{ LOW, MEDIUM, HIGH }
	> Como usar: MeuEnum enumCriado = MeuEnum.MEDIUM;
Caracteristicas:	
- Pode ser declarado dentro de uma classe.
- Os valores declarados no Enum são passados utilizando ponto(.)
- Enum não pode criar objeto.
- Enum não pode extender uma classe abstrata.

# Classes
É a base da orientação a objeto, é na classe que acontece tudo, é como uma planta baixa.
Na classe é criado os métodos, variaveis e feito as construções.
	> Como declarar: public classe MinhaClasse { ... }
	> Como usar: MinhaClasse umaInstancia = new MinhaClasse();
Caracteristicas:
- De uma classe pode ser criado várois objetos, basta instanciar a classe.
- Uma classe pode extender uma classe abstrata (extends)
- Uma classe pode implementar várias interfaces (implements)
- Métodos são criados dentro de uma classe
- 

# Métodos
São como ferramentas de uma classe que ajudam a resolver parte do problema que a classe se propõe a atender.
Um método é parte de uma classe.
Pode ser do tipo sem retorno ou com retorno.
	>Como declarar: public static int passandoNumero(int umParametro) { ... return int }
	> Como usar: umaInstancia.passandoNumero(3)
Caracteristicas:
- Metodo **void** é um método **sem retorno**, ele pode ou não receber parametros, um ou mais, e então processa as instruções de dentro do método.
**public void metodoSemRetorno(){ ... }**
- Um metodo pode **retornar** um parametro, estado ou valor, nesse caso sempre deve retornar o tipo que foi declarado no método e sempre tem um return
**public String metodoComRetorno(){... return String}**
- Métodos Overloading são métodos que tem o mesmo nome, isso pq pode ter diferentes tipos de retorno, como um método retorn só um tipo, podemos criar um método para cada tipo.
**public int overloadingMetodo (){ ... return int }**
**public float overloadingMetodo (){ ... return float }**
- No scopo do Java somente é possível usar uma variavel abaixo da sua declaração e dentro do mesmo bloco.
- Um método recursivo é uma técnica onde o método chama ele mesmo. Em cascata a resposta vai fazendo retorno.
**public int metodoRecursivo(){ ... return metodoRecursivo }**
**private int metodoRecursivo(){ .. return int }**

# Encapsulamento
É uma forma que proteger todos os dados de uma classe, assim não é possível acessar diretmanete os dados.
No encapsulamento os dados são declarados como *private*


# Satatic
Tem alguma coisa a ver a ser usada dentro do main, não em um objeto, algo assim...

  
