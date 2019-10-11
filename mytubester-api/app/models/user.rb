class User < ApplicationRecord
  has_secure_password

  has_many :videos

  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, presence: true
end
