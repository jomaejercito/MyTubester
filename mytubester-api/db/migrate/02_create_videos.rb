class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :description
      t.time :duration
      t.string :uploaded_by
      t.datetime :uploaded_at

      t.timestamps
    end
  end
end
