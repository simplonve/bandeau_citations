class BandeauController < ApplicationController
  def citations
  	t = rand(14)+1
  	@citation = Citation.find(t)
  end
end
