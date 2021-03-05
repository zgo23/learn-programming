You currently installed version of java is from an old version of the Cask file -- please run

brew uninstall --force java
then

rm -r "$(brew --prefix)/Caskroom/java"
then

brew install java
and this may fix your issue.
