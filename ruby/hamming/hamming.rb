class Hamming
  #str == strand versus the common abbreviation of string
  def self.compute(first_str, second_str)
    hamms = 0
    max_length = if first_str.length < second_str.length
      first_str.length
    else
      second_str.length
    end

    max_length.times do |i|
      hamms += 1 if first_str[i] != second_str[i]
    end
    hamms
  end
end
#hamms may or may not be a beer reference...