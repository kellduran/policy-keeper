class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :user_name
end
