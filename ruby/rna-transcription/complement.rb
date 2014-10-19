class Complement

  def self.of_dna(strand)
    complement = []

    strand.each_char do |char|
      case char
      when "G"
        complement << "C"
      when "C"
        complement << "G"
      when "T"
        complement << "A"
      when "A"
        complement << "U"
      end
    end
    complement.join
  end

  def self.of_rna(strand)

  end
end