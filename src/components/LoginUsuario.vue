<template>

  <div class="container1 col-md-12"> 
    <div class="col-md-3 mt-5"> 
    <div class="row"> 
      <div class="col-12"> 
      
      
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Informe o Email" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Senha</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Informe a Senha" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Lembre-me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
      
    
      </div>
    </div>
  </div>
  </div>
</template>
<style type="text/css">
.container1{
  display: flex;
  justify-content: center;
}

</style>