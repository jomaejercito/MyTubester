class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :password_digest
  has_many :videos
end
