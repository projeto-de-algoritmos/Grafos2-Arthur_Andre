class Graph
{
     
    constructor(vertex)
    {
       console.log("grafo criado");
       this.vertexs = vertex
    }
   

    add_vertex(data)
    {
        var vertex = {
            user: data['user'],
            avatar_url: data['avatar_url'],
            vizinhos: data['vizinhos']
        }

        this.vertexs.push(vertex);


    }

    add_edge(origin, destiny)
    {
        this.vertexs[origin]['vizinhos'].append(this.vertexs[destiny]['user']);
    }

    // vetor para auxiliar na busca
    visited = new Array(this.n_vertexs).fill(0);
    
    depth_first_search_aux(name)
    {   var cont = 1
        this.vertexs.map((vertex, index) => {
            console.log('vertice analisado: ', vertex['user'], '(total', this.n_vertexs, ')')
            this.depth_first_search(0, cont, name)

        });
    }

    depth_first_search(initial, cont, name)
    {
        this.visited[initial] = cont;

        this.vertexs[initial]["vizinhos"].map((vizinho, index) => {
            console.log('v', index, ': ', vizinho);
            if(!this.visited[vizinho])
            {
                if(this.vertexs[vizinho]['user'] == name)
                {
                    return this.vertexs[vizinho];
                }
                this.depth_first_search(vizinho, cont + 1)
            }
        });

        return 0;
    }

    transpose_graph()
    {
        console.log(this.n_vertexs, '\n\n\n\n\n\n\n\n')
        this.vertexs.map((vertex, index)=>{

            console.log('\n', vertex);//, index, '\n\n');
            this.vertexs[index].vizinhos.map((vizinho, index) => {

                console.log(vizinho);

            });

            

        });
        
    }

    find_components()
    {

    }

    get_vertex()
    {
        return this.vertexs
    }
    
}

export default  Graph

