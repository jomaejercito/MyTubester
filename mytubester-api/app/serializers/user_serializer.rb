class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :password_digest
end
