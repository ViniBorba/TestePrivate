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
