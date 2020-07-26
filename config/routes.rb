Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/home'
  get 'pages/about'
  get 'pages/projects'
  get 'pages/web_development'
  get 'pages/contact'

  resources :blogs, only: [:create, :new, :show, :destroy, :index, :update]
#For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
