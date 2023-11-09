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
    <div>
      <div>
        <div>

          <h1 className='text-purple-700'>DASHBOARD</h1>

          <div>
            <h2>Heureux de te revoir !</h2>
          </div>

          <form onSubmit={handleSubmit(login)}>

            <div>
              <label>
                <span>Email</span>
              </label>
              <input type="text" name='email' {...register('email' , {required: true})} placeholder="Email"/>
              {errors.email && <label>
                <span>L'email est requis</span>
              </label>}
            </div>

            <div>
              <label>
                <span>Password</span>
              </label>
              <input type="password" name='password' {...register('password' , {required: true})} placeholder="Mot de passe"/>
              {errors.password && <label>
                <span>Le mot de passe est requis</span>
              </label>}
            </div>

            <div>
              <button type='submit'>Se connecter</button>
            </div>
                                
          </form>

        </div>
      </div>
    </div>
  )
}

export default Index
