Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



  # unauthenticated do
  root :to => 'home#index'
  # end
  
  # authenticated do
  #   root :to => 'dashboard#index'
  # end
end
