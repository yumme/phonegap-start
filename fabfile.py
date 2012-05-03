import sys
from fabric.api import *

@task
def deploy():
  #test()
  push()

@task
def test():
  with lcd('/Users/Oscar/Sites/phonegap-start/'):
    local('make test')

@task
def push():
  with lcd('/Users/Oscar/Sites/phonegap-start/'):
    with settings(warn_only=True):
      local('git pull origin master')
      local('git add .')
      local('git status')
      message = raw_input('Enter a git commit message: ')
      commit = local('git commit -a -m "%s"' % message)
      if commit.failed:
        print 'Nothing to commit, exiting...'
        sys.exit(0)
      else:
        local('git push origin master')