class Fam < ActiveRecord::Base
  has_many :members, dependent: :destroy
end