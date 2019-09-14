class Graph
{
    vertexs = []
    constructor()
    {
       console.log("grafo criado")
    }


    add_vertex(data)
    {
        var vertex = {
            user: data['user'],
            avatar_url: data['avatar_url'],
            vizinhos: data['vizinhos']
        }

        this.vertexs.push(vertex);

        console.log("deu certo")

    }

    depth_first_search()
    {

    }

    transpose_graph()
    {
        var new_graph = [];


        this.vertexs.map((x,index)=>{
            

        });
        
    }

    get_vertex()
    {
        return this.vertexs
    }
    
}

export default  Graph

