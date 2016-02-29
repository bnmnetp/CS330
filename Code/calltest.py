import re

class MyTestApp():
    def __init__(self):
        """docstring for __init"""
        
        self.matchlist = {'^/[aeiou]+$':'all vowels',
            '.*luther([0-9]+).*college.*':'grad year'}
        
    def __call__(self,environ,start_response):
        """docstring for __call__"""
        url = environ['PATH_INFO']
        rcode = "404 Not Found"
        res = '404 Not Found'
        for reg in self.matchlist:
            g = re.match(reg,url)
            if g:
                res = self.matchlist[reg]
                rcode = "200 OK"
                if res == 'grad year':
                    res = 'grad year %s' % g.group(1)
                break

        start_response(rcode, [
            ("Content-Type", "text/plain"),
            ("Content-Length", str(len(res)))])
            
        return [bytes(res,'utf-8')]

matchapp = MyTestApp()
