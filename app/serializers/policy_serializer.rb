class PolicySerializer < ActiveModel::Serializer
  attributes :id, :state, :effective_year, :policy_type, :title, :law_citation, :database, :source, :title_description, :summary, :included
end
