class Video < ApplicationRecord
  belongs_to :user
  
  validates :title, presence: true
  validates :duration, presence: true
  validates :uploaded_by, presence: true
  validates :uploaded_at, presence: true
end
