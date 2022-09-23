class CreatePolicies < ActiveRecord::Migration[6.1]
  def change
    create_table :policies do |t|
      t.string :state
      t.integer :effective_year
      t.string :policy_type
      t.string :title
      t.string :law_citation
      t.string :database
      t.string :source
      t.string :title_description
      t.string :summary
      t.boolean :included

      t.timestamps
    end
  end
end
