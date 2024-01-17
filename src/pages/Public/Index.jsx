import React from 'react'
import { loginByEmail } from '../../fonctionsjs/auth'
import { useForm } from 'react-hook-form'


const Index = () => {

  const {register , handleSubmit , formState:{errors} } = useForm()

  const login = async (data) => { 
        
    //event.preventDefault()
    console.log(data)

    const {email , password } = data
    
    loginByEmail(email , password).then(user =>{

    }).catch(error =>{
      console.log('error' , error)
    })
  }

  return (
    
      <div className='card'>
        <div>

          <h1 className='titleConnexion'>DASHBOARD</h1> 

          <div className='card-body'>

            <div>
              <h2 className='sousTitle'>Heureux de te revoir !</h2>
            </div>

            <form onSubmit={handleSubmit(login)}>

              <div>
                
                <input type="text" name='email' {...register('email' , {required: true})} placeholder="Email"/>
                {errors.email && <label>
                  <span>L'email est requis</span>
                </label>}
              </div>

              <div>
                
                <input type="password" name='password' {...register('password' , {required: true})} placeholder="Mot de passe"/>
                {errors.password && <label>
                  <span>Le mot de passe est requis</span>
                </label>}
              </div>

              <div>
                <button className='login' type='submit'>SE CONNECTER</button>
              </div>
                                  
            </form>

          </div>

        </div>
      </div>
    
  )
}

export default Index
