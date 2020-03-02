Rails.application.routes.draw do
  resources :forums
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  devise_for :users
  # unauthenticated do
  root :to => 'home#index'
  # end
  
  # authenticated do
  #   root :to => 'dashboard#index'
  # end
end
