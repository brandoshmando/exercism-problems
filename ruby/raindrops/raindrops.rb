require 'prime'
require 'pry'
class Raindrops
  def self.convert(num)
    factorization = num.prime_division
    pry
    puts factorization
    # response = if factorization.size == 0
    #   "1"
    # end
    # puts response
  end
end
Raindrops.convert(1)