import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';


// ... (les mêmes interfaces que précédemment)
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}


const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: ''
  });
  
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(formData.username, formData.email, formData.password);
      setMessage("Inscription réussie !"); 
      setTimeout(() => {
         navigate('/login', { 
        state: { 
          message: 'Inscription réussie ! Veuillez vous connecter.',
          email: formData.email
        }
      });

      setIsLoading(false);
    }, 2000);
     
    } catch (error: any) {
      setMessage("Erreur lors de l’inscription");
      setIsLoading(false);
    }
  
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-primary via-info ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-12">
          <h1 className="text-5xl font-bold text-white">Rejoignez-nous !</h1>
          <p className="py-6 text-white opacity-90 font-f4 text-2xl">
            Créez votre compte et découvrez toutes nos fonctionnalités exclusives. 
            Déjà membre de notre communauté dynamique.
          </p>
        </div>
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl font-bold mb-4 font-f6">
              Inscription
            </h2>
            <p className='alert'>{message}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-f6">Nom d'utilisateur</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  className="input  input-primary bg-base-100 pr-8 text-md font-semibold"
                  required
                />
              </div>
              
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text font-f6">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="input input-bordered input-primary pr-8 text-md font-semibold"
                  required
                />
              </div>
              
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text font-f6">Mot de passe</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-primary bg-base-100 pr-8 text-md font-semibold"
                  required
                />
              </div>
              
              <div className="form-control mt-6 justify-center flex">
                <button 
                  type="submit" 
                  className={`btn btn-primary hover:btn-info hover:text-white hover:shadow-lg hover:shadow-info ${isLoading ? 'loading' : ''}`}
                >
                  {isLoading ? 'Création...' : 'Créer mon compte'}
                </button>
              </div>
            </form>
            
            <div className="divider">OU</div>
            
            <div className="text-center">
              <p className="text-sm">
                Déjà un compte ?{' '}
                <a 
                  href="/login" 
                  className="link link-info font-semibold"
                >
                  Se connecter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;